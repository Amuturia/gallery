pipeline {
    agent any

    tools {
        //nodejs "NodeJS_14"
        // the name of the nodejs installation = _14
        gradle "gradle"
        // the name of the gradle installation v= -6
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
                sh 'gradle --version'
                //sh 'gradle install'
                sh 'gradle init'
                sh 'gradle build'
                //sh 'npm install'
                //sh 'npm serve'
            }
            
        }
        stage ("Test") {
            steps {
                sh 'gradle test'
                //Step runs the steps in test folder
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
