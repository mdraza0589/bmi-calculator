
const form=document.querySelector('#btn')

btn.addEventListener('click',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    if(height === '' || height <0 || isNaN(height)){
        results.innerHTML=`${height} not a valid height`
    }else if(weight === '' || weight <0 || isNaN(weight)){
        results.innerHTML=`${weight} not a valid weight`
    }
    else{
        const bmi=((weight)/((height*height)/10000)).toFixed(2)
        // show results
        if(bmi<18.6)
        results.innerHTML = `<span>${bmi} Under Weight</span>`  // apan tag is optional here
        else if(bmi>=18.6 && bmi<=24.9)
        results.innerHTML = `<span>${bmi} Normal Range</span>`
        else
        results.innerHTML = `<span>${bmi} Over Weight</span>`
    }
})