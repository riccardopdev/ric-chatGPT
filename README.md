# ric-chatGPT

## Description
This is a project to create a chat bot using OpenAI API and ChatGPT.  
The chat bot will have the task to answer questions regarding my technical skills, work experience and career since I started as Front End developer.  

The project is made up of two different elements:  

### Client
***React App.***  
The client will be the interface through which questions can be asked and answers can be viewed.  
The client will communicate with the backend server to send all questions to an API endpoint and will receive the answer back from the server.  

### Server
***Node + Express App.***  
The server will work as a proxy and implement all logic to communicate between the client and OpenAI API.  

### Fine-tuning the OpenAI model
***Preparing the data for fine-tuning***  
One of the first steps to create a chat bot that can answer questions based on specific data is to provide this data to the OpenAI model.  

This process is explained in the OpenAI Fine-tuning documentation:  
<https://platform.openai.com/docs/guides/fine-tuning>  

The process requires the preparation of data which can be collected in different file format, including a .xlsx file with the requirements that they contain a **prompt** and a **completion** column/key.  

Examples for the content of the prompt and completion columns could be:  
prompt: What's your favourite food?  
completion: My favourite food is pizza.  

OpenAI documentation suggests to have at least a couple of hundreds prompt/completion to train a model.  

***Formatting and converting fine-tuning data***  
Once the .xlsx document is completed with the required data, we need to format and convert it to a .jsonl file before we can feed this to the model for fine-tuning.  

To format and convet the data we can use the OpenAI CLI tool.  
Before we can use this, we need to install **openai** and possibly also the **pandas** library.  

Installing openai:  
```
pip install --upgrade openai
```

Installing pandas library:  
```
pip install openai[datalib]
```

Once these are installed we can use the format and conver the data using below openai command:  
```
openai tools fine_tunes.prepare_data -f <PATH_TO_xls_FILE>
```

The tool might suggest to add indicators at the end or beginning of prompts and completions.  
