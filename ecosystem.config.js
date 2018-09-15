
module.exports = {
    /**   
    * Application configuration section   
    * http://pm2.keymetrics.io/docs/usage/application-declaration/   
    */  
    apps: [              
        // First application    
        {   
            name: 'karma_points',   
            script: './src/server/index.js',   
        }
    ],
    
    
    
    /** 
    * Deployment section 
    * http://pm2.keymetrics.io/docs/usage/deployment/  
    */
    
    deploy: {  
        production: {  
            user: 'ubuntu', 
            key: "/Users/Juico/.ssh/id_rsa",
            host: ["18.222.189.211"],
            ref: 'origin/master',
            ssh_options: "StrictHostKeyChecking=no",
            repo: 'git@github.com:nalnir/karma-points.git',
            path: '/community/karma-points',
            'pre-setup':
                "ls -la; sudo mkdir /community ; sudo chown -R ubuntu.ubuntu /community ; " +
                "sudo curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - ; " +
                "sudo apt-get install -y nodejs ; " +
                "sudo npm install pm2 -g ; ",
            'pre-deploy':
                'sudo mkdir //community/karma-points ; ' +
                'sudo mkdir /community/karma-points/source ; sudo mkdir /community/karma-points/shared ;' +
                'sudo chown -R ubuntu.ubuntu /community/karma-points',
            'pre-deploy-local':
                "echo 'This is a local executed command'",
            'post-deploy':
                'npm install && cp -R os/ /community/karma-points/source/node_modules/openstack && ' +
                'pm2 reload ecosystem.config.js --env production'
            },
        },
}

//         deploy : {
//             production : {
//               "key"  : "/Users/Juico/.ssh/id_rsa",
//               "user" : "ubuntu",
//               // Multi host is possible, just by passing IPs/hostname as an array
//               "host" : ["18.222.189.211"],
//               // Branch
//               "ref"  : "origin/master",
//               // Git repository to clone
//               "repo" : "git@ggithub.com:nalnir/karma-points.git",
//               // Path of the application on target servers
//               "path" : "/community/karma-points",
//               // Can be used to give options in the format used in the configura-
//               // tion file.  This is useful for specifying options for which there
//               // is no separate command-line flag, see 'man ssh' 
//               // can be either a single string or an array of strings
//               "ssh_options": "StrictHostKeyChecking=no",
//               // To prepare the host by installing required software (eg: git) 
//               // even before the setup process starts
//               // can be multiple commands separated by the character ";"
//               // or path to a script on your local machine
//               "pre-setup" : "ls -la ; " +
//                           "sudo mkdir /opt/tv ; sudo chown -R ubuntu.ubuntu /opt/tv/ ; " +
//                           "sudo curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - ; " +
//                           "sudo apt-get install -y nodejs ; " +
//                           "sudo npm install pm2 -g ; ",
//               // Commands / path to a script on the host machine
//               // This will be executed on the host after cloning the repository
//               // eg: placing configurations in the shared dir etc
//             //   "post-setup": "ls -la",
//               'pre-deploy':
//                 'sudo mkdir /community/karma-points ; ' +
//                 'sudo chown -R ubuntu.ubuntu /opt/tv/workflowapi/',
//               // Commands to execute locally (on the same machine you deploy things)
//               // Can be multiple commands separated by the character ";"
//               "pre-deploy-local" : "echo 'This is a local executed command'",
//               // Commands to be executed on the server after the repo has been cloned
//               "post-deploy" : "sudo npm install"
//               // Environment variables that must be injected in all applications on this env
//             }
//         }
// }
    
    