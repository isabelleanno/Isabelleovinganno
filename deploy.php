<?php


namespace Deployer;


require 'vendor/autoload.php';
require 'recipe/sulu.php';


// Define host
host('prod')
    ->setHostname(getenv('DEPLOY_HOST'))
    ->set('remote_user', getenv('DEPLOY_USER'))
    ->set('deploy_path', getenv('DEPLOY_PATH'))
    ->set('branch', 'main')
    ->set('http_user', 'www-data')
    ->set('http_group', 'www-data');


set('repository', 'git@github.com:isabelleanno/Isabelleovinganno.git');

// Keep only 3 releases (current + 2 previous)
set('keep_releases', 3);

// Configure writable directories - add website cache
set('writable_dirs', [
    'var/cache',
    'var/cache/website',
    'var/log',
    'public/uploads',
    'public/build'
]);


set('writable_mode', 'acl');
set('writable_use_sudo', true);


// Configure shared directories
set('shared_dirs', [
    'var/log',
    'public/uploads'
]);


set('shared_files', ['.env']);
set('ssh_multiplexing', false);


// Combined environment and permission setup
task('deploy:setup_env_and_permissions', function () {
    // Ensure .env is in shared directory
    if (test('[ -f {{deploy_path}}/.env ]') && !test('[ -f {{deploy_path}}/shared/.env ]')) {
        run('mv {{deploy_path}}/.env {{deploy_path}}/shared/.env');
    }


    if (!test('[ -f {{deploy_path}}/shared/.env ]')) {
        run('echo "APP_ENV=prod\nAPP_DEBUG=false" > {{deploy_path}}/shared/.env');
    }


    // Ensure proper permissions on shared directories
    run('sudo chown -R {{remote_user}}:{{http_group}} {{deploy_path}}/shared');
    run('sudo chmod -R 775 {{deploy_path}}/shared');
})->desc('Setup environment and permissions');


// Optimized Sulu post-deployment
task('sulu:post_deploy', function () {
    within('{{current_path}}', function () {
        // Clear cache with proper permissions
        run('sudo -u {{http_user}} php bin/console cache:clear --env=prod --no-warmup');
        run('sudo -u {{http_user}} php bin/console cache:warmup --env=prod');
        run('sudo -u {{http_user}} php bin/console sulu:admin:update-build --env=prod');


        // Ensure cache permissions are correct
        run('sudo chown -R {{http_user}}:{{http_group}} var/cache');
        run('sudo chmod -R 775 var/cache');
    });
})->desc('Sulu post-deployment tasks with proper permissions');


after('deploy:setup', 'deploy:setup_env_and_permissions');
after('deploy:symlink', 'sulu:post_deploy');
