import"./assets/1-gallary-BMBSRyXN.js";let e={email:"",message:""};const a=document.querySelector(".feedback-form"),m=document.querySelector('input[name="email"]'),r=document.querySelector('textarea[name="message"]'),s=localStorage.getItem("feedback-form-state");s&&(e=JSON.parse(s),m.value=e.email||"",r.value=e.message||"");const n=()=>{localStorage.setItem("feedback-form-state",JSON.stringify(e))};a.addEventListener("input",t=>{const{name:o,value:l}=t.target;e[o]=l,n()});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},a.reset()});
//# sourceMappingURL=2-form.js.map
