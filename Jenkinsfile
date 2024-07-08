pipeline {
    agent any

    tools {
        nodejs "node"
        // the tool is getting information from the nodejs global configuration (Dashboard>manage jenkins>tools>nodejs configuration)
    }
    
    stages {
        stage('Checkout & Install Dependencies') {
            steps {
                // Clone the repository (replace with your actual repository URL)
                git branch: 'master', url: 'https://github.com/Amuturia/gallery.git'
                // Install npm dependencies
               
            }
        }
        stage ("Build") {
            steps {
                // To npm install at jenkins pipeline
                sh 'npm install'
               
            }
            
        }
        stage ("Test") {
            steps {
                //To run the test in jenkinsfile
               sh 'npm test'
            }
        }
        
    }
      //Student email notification 
    post {  
         success {  
                mail bcc: '', 
	        	body: 'This has been a successfull pipeline deploy', 
		        subject: 'Successful Deploy', 
		        to: 'antony.muturia@student.moringaschool.com';
         } 

         failure {  
             mail bcc: '', 
             body: "<b>Example</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", 
             cc: '', charset: 'UTF-8', 
             from: '', 
             mimeType: 'text/html', 
             replyTo: '', 
             subject: "ERROR CI: Project name -> ${env.JOB_NAME}", 
             to: "antony.muturia@student.moringaschool.com";  
         }  
         
    }
}
