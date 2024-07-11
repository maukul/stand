<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CreateToken extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:create-token {appName}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command creates a token for the given app name.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $appName = $this->argument('appName');
        $token = bin2hex(random_bytes(16));

        try {
            \App\Models\Token::create([
                'name' => $appName,
                'token' => $token,
            ]);
        } catch (\Exception $e) {
            $this->error('Error while generating token.');
            return;
        }

        $this->info("Token for the app '{$appName}' is: {$token}");
    }
}
