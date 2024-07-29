function check(){
    var cnt=0;
    var count=document.getElementsByClassName('check');
    
    for (let i = 0; i < count.length; i++) {
        if(count[i].checked == true){
            cnt++;  
        }
        document.getElementById('total_item').innerText=cnt;
    } 
}

var sum=0;
function changdat(v) {
    var check = document.getElementById('check'+v); 
    
    var amount=document.getElementById('pri'+v).innerHTML; 
    if(check.checked == true){

        sum=  sum + parseInt(amount);

    }
    else{
        
        sum= sum - amount;
        
    }
    document.getElementById('amount').innerText=sum;
    if (true) 
    {  
        
        var gst = sum*18/100;
        
    }
    document.getElementById('gst').innerText=gst;   
    document.getElementById('gst_amt').innerText=gst+sum;   
}   
function submit(){
    
    var pay=document.getElementById('gst_amt').innerText;
    var text=document.getElementById('entercode').value;

    
    if (text == 'FLAT#50') {
        var p_amt=pay*50/100;
        document.getElementById('pay_amt').innerText=pay-p_amt;
        document.getElementById('discount').innerText='-'+p_amt;
    }
    if (text == 'FLAT#30') {
        var p_amt=pay*30/100;
        document.getElementById('pay_amt').innerText=pay-p_amt;
        document.getElementById('discount').innerText='-'+p_amt;
    }
    if (text == 'FLAT#20') {
        var p_amt=pay*20/100;
        document.getElementById('pay_amt').innerText=pay-p_amt;
        document.getElementById('discount').innerText='-'+p_amt;
    }


}




const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
