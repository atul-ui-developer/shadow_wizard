function shadow_wizard(options){

let images = document.querySelectorAll('.shadow_wizard');
if (option.shadow_type === 'hard')
   
   options.shadow_type = '0px'
else
	options.shadow_type = '15px'

images.forEach (image =>{
	images.style.boxShadow = '10px 10px $(option.shadow_type) 1px rgba(0,0,0,0.12)';
    if(options.padding){
    	images.style.padding = '10px';
    }
})
}

module.exports.shadow_wizard = shadow_wizard;