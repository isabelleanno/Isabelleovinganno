<?php

namespace Deployer;

require 'vendor/deployer/deployer/recipe/sulu2.php';

// Load environment variables from .env.deploy
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__, '.env.deploy');
$dotenv->load();

// Define host using env vars
host(getenv('DEPLOY_HOST'))
    ->user(getenv('DEPLOY_USER'))
    ->set('deploy_path', getenv('DEPLOY_PATH'))
    ->set('branch', 'main')
    ->set('http_user', 'www-data')
    ->set('http_group', 'www-data')
    ->stage('prod');

// Repository
set('repository', 'git@github.com:isabelleanno/Isabelleovinganno.git');

// Composer options
set('composer_options', '{{composer_action}} --verbose --prefer-dist --no-progress --no-interaction --no-dev --optimize-autoloader --apcu-autoloader');

// Shared files and dirs
set('shared_files', ['.env']);
set('shared_dirs', ['public/uploads', 'var/uploads']);
set('writable_dirs', ['var', 'public/uploads']);

// Keep last 3 releases
set('keep_releases', 3);

// Unlock if deploy fails
after('deploy:failed', 'deploy:unlock');
