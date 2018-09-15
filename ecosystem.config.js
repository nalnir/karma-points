
module.exports = {
    /**   
    * Application configuration section   
    * http://pm2.keymetrics.io/docs/usage/application-declaration/   
    */  
    apps: [              
        // First application    
        {   
            name: 'karma_points',   
            script: './src/index.js',  
            env: { 
                COMMON_VARIABLE: 
                'true'
            },
            env_production: {   
                NODE_ENV: 
                'production'
            }      
        },
    ],
    
    
    
    /** 
    * Deployment section 
    * http://pm2.keymetrics.io/docs/usage/deployment/  
    */
    
    // deploy: {  
    //     production: {  
    //         user: 'ubuntu', 
    //         key: "../prov",
    //         host: ['34.234.164.237'],
    //         ref: 'origin/master',
    //         ssh_options: "StrictHostKeyChecking=no",
    //         repo: 'git@github.com:Siminn/tvprov-wapi.git',
    //         path: '/opt/tv/workflowapi',
    //         'pre-setup':
    //             "ls -la; sudo mkdir /opt/tv ; sudo chown -R ubuntu.ubuntu /opt/tv/ ; " +
    //             "sudo curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - ; " +
    //             "sudo apt-get install -y nodejs ; " +
    //             "sudo npm install pm2 -g ; ",
    //         'pre-deploy':
    //             'sudo mkdir /opt/tv/workflowapi ; ' +
    //             'sudo mkdir /opt/tv/workflowapi/source ; sudo mkdir /opt/tv/workflowapi/shared ;' +
    //             'sudo chown -R ubuntu.ubuntu /opt/tv/workflowapi/',
    //         'pre-deploy-local':
    //             "echo 'This is a local executed command'",
    //         'post-deploy':
    //             'npm install && cp -R os/ /opt/tv/workflowapi/source/node_modules/openstack && ' +
    //             'pm2 reload ecosystem.config.js --env production'
    //         },
    //     },

        deploy : {
            production : {
              "key"  : "/Users/Juico/.ssh",
              "user" : "node",
              // Multi host is possible, just by passing IPs/hostname as an array
              "host" : ["212.83.163.3"],
              // Branch
              "ref"  : "origin/master",
              // Git repository to clone
              "repo" : "git@ggithub.com:nalnir/karma-points.git",
              // Path of the application on target servers
              "path" : "./",
              // Can be used to give options in the format used in the configura-
              // tion file.  This is useful for specifying options for which there
              // is no separate command-line flag, see 'man ssh' 
              // can be either a single string or an array of strings
              "ssh_options": "StrictHostKeyChecking=no",
              // To prepare the host by installing required software (eg: git) 
              // even before the setup process starts
              // can be multiple commands separated by the character ";"
              // or path to a script on your local machine
              "pre-setup" : "apt-get install git ; ls -la",
              // Commands / path to a script on the host machine
              // This will be executed on the host after cloning the repository
              // eg: placing configurations in the shared dir etc
              "post-setup": "ls -la",
              // Commands to execute locally (on the same machine you deploy things)
              // Can be multiple commands separated by the character ";"
              "pre-deploy-local" : "echo 'This is a local executed command'",
              // Commands to be executed on the server after the repo has been cloned
              "post-deploy" : "npm install"
              // Environment variables that must be injected in all applications on this env
            }
        }
}
    
    