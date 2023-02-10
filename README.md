# ric-chatGPT: A Chat Bot using OpenAI API and ChatGPT

## Overview
This project aims to create a chat bot using OpenAI API and ChatGPT to answer questions about the author's technical skills, work experience, and career as a Front End developer.  

## Components
The project consists of two components, the client and the server:  

### Client
***React App.***  
The client is a React app that serves as the interface for users to ask questions and view answers. It communicates with the backend server to send questions to an API endpoint and receive the answers.  

### Server
***Node + Express App.***  
The server, built using Node and Express, acts as a proxy and implements the logic to communicate between the client and OpenAI API.  

### Fine-tuning the OpenAI model  
One of the crucial steps in creating a chat bot that can answer specific questions is to provide the relevant data to the OpenAI model. The following steps explain the process of fine-tuning the OpenAI model.  

***Preparing the data for fine-tuning***  
The data needs to be in a specific format to be fed to the OpenAI model for fine-tuning. The format and preparation process are explained in the OpenAI Fine-Tuning documentation:  
<https://platform.openai.com/docs/guides/fine-tuning>  

The data can be collected in different file formats, including a .xlsx file, which must contain a **prompt** and a **completion** column/key.  

Examples for the content of the **prompt** and **completion** columns could be:  
**prompt:** What's your favourite food?  
**completion:** My favourite food is pizza.  

OpenAI documentation suggests having at least a couple of hundred **prompt/completion** pairs to train the model effectively.  

***Formatting and converting fine-tuning data***  
Once the .xlsx document is prepared with the required data, it needs to be formatted and converted to a .jsonl file before it can be fed to the model for fine-tuning.  

To format and convert the data, you can use the OpenAI CLI tool. Before using the tool, you need to install **openai** and possibly also the **pandas** library.  

Installing openai:  
```
pip install --upgrade openai
```

Installing pandas library:  
```
pip install openai[datalib]
```

Once the libraries are installed, you can format and convert the data using the following openai command:  
```
openai tools fine_tunes.prepare_data -f <PATH_TO_xls_FILE>
```

The tool might suggest adding indicators at the beginning or end of **prompts** and **completions** to improve the model's performance.  
