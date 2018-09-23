
module.exports = {
    /**   
    * Application configuration section   
    * http://pm2.keymetrics.io/docs/usage/application-declaration/   
    */  
    apps: [              
        // First application    
        {   
            name: 'karma_points',   
            script: 'index.js',
            env: {
                COMMON_VARIABLE:
                    'true'
            },
            env_production: {

                NODE_ENV:
                    'production'

            }   
        }
    ],  
    
    /** 
    * Deployment section 
    * http://pm2.keymetrics.io/docs/usage/deployment/  
    */
    
    deploy: {  
        production: { 
            key: '/Users/Juico/.ssh/id_rsa',
            user: 'ubuntu', 
            host: ["18.222.27.92"],
            ref: 'origin/master',
            ssh_options: ["StrictHostKeyChecking=no", "PasswordAuthentication=no", "ForwardAgent=yes"],  
            repo: 'git@github.com:nalnir/karma-points.git',
            path: '/home/karma-points',
            'pre-setup':
                "ls -la; sudo mkdir /home/karma-points ; sudo chown -R ubuntu.ubuntu /home/karma-points ; " +
                "sudo curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - ; " +
                "sudo apt-get install -y nodejs ; " +
                "sudo npm install pm2 -g ; ",
            'pre-deploy':
                'sudo mkdir /home/karma-points ; ' +
                'sudo mkdir /home/karma-points/source ; sudo mkdir /home/karma-points/shared ;' +
                'sudo chown -R ubuntu.ubuntu /karma-points',
            'pre-deploy-local':
                "echo 'This is a local executed command'",
            'post-deploy':
                'npm install && ' +
                'pm2 reload ecosystem.config.js --env production'
            },
        },
}   
    