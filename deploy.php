<?php

namespace Deployer;

require 'recipe/sulu.php';

// Configuration
set('repository', 'git@github.com:isabelleanno/Isabelleovinganno.git');
set('keep_releases', 3);

// Add .env as a shared file
add('shared_files', ['.env']);

// Host
host('prod')
    ->setHostname(getenv('DEPLOY_HOST'))
    ->set('remote_user', getenv('DEPLOY_USER'))
    ->set('deploy_path', getenv('DEPLOY_PATH'))
    ->set('branch', 'main')
    ->set('http_user', getenv('HTTP_USER'));


// Force unlock
task('deploy:force-unlock', function () {
    run('rm -f {{deploy_path}}/.dep/deploy.lock');
    writeln('<info>Deploy lock removed</info>');
});

// Update Build and install dependencies
task('update-build', function () {
    run('cd {{current_path}} && npm i && npm run build && bin/console sulu:admin:update-build');
});

// Hooks
before('deploy:prepare', 'deploy:force-unlock');
after('deploy:symlink', 'update-build');
after('deploy:failed', 'deploy:unlock');
