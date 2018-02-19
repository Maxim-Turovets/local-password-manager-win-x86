
function appending(string, type) {

	let local_str=string+"";
	let fs=require("fs");
	
	if(local_str!="   ===============")
	{
		if (document.form_text.input_login.value!="" && document.form_text.input_pass.value!="" && document.form_text.input_name.value!="")
		{                                                  //  если  все формы заполнены то выполнить скрипт
			fs.appendFileSync("paas.txt", type,  "utf8");
			fs.appendFileSync("paas.txt", local_str,  "utf8");
	    fs.appendFileSync("paas.txt", `\r\n`,  "utf8"); // перевод строки 
	  }
	     else 
	     {
	       	if(type=="===========   ")
	  	  	type="name";

		      alert('Enter '+type+' account');
	     }
	}
}

   function add_files()
     {
        let arr;
    let fs = require("fs");
  fs.readFile("paas.txt", "utf8", 
            function(error,data){
            if(error) throw error; // если возникла ошибка
          //  console.log(data);  // выводим считанные данные
          //  document.file_password.base_password.value=data;
            arr=data.toString();
            arr=arr.split("\n");
 
             for(let i=0; i<arr.length;i++)
             {
                console.log(arr[i]);
              //  document.file_password.base_password.value=`\r\n`;
             }
            }
          );
}

hh();
 




