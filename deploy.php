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
    ->set('http_user', 'www-data');

// Simple backup task (optional but recommended)
task('database:backup', function () {
    $backup = '{{deploy_path}}/shared/backup_' . date('Y-m-d_H-i-s') . '.sql';
    run("mysqldump -u root -pvoetbaltafel sulu_db > $backup 2>/dev/null || true");
    // Keep only last 3 backups
    run("ls -t {{deploy_path}}/shared/backup_*.sql 2>/dev/null | tail -n +4 | xargs rm -f || true");
});

// Hook the backup before deployment
before('deploy:prepare', 'database:backup');
