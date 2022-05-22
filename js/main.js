$(document).ready(function(){
    // open search modal
    $("#input-search").click(function(){
      $("#searchModal").modal();
    });
    $("#findService").click(function(){
      $("#searchModal").modal();
    });

    // handle change input
    $("#input-text").on('change keyup',function(){
        $("#searchModal").modal();
        const inputText = $("#input-text").val().toLowerCase();
        const servicesArr = $(".service-item");
        // console.log(servicesArr.filter(service => console.log(service.prevObject)));
        // const serviceTitle = servicesArr[0].innerText.toLowerCase();
        if(inputText.length > 0){
            let services = [];
            for(let i = 0; i<=11; i++){
              
                if(servicesArr[i]?.innerText.toLowerCase().match(inputText)){
                   services.push(servicesArr[i])
                //       $("#service-section .container .row").html(item);
                }else{
                    servicesArr[i]?.remove();
                }
       
            }
                //    $("#service-section .container .row").html(services[1]);
         }
      });
      // open order place modal
      $(".contact-btn").click(function(){
        $("#orderModal").modal();
      })
          // handle get user input value
    // handle input value
    let id = 1;
    function handleInput() {
      id = Math.random()*id;
        const title = document.getElementById("title").value.trim();
        const amount = document.getElementById("amount").value;
        const startDate = document.getElementById("startDate").value.split("-");
        const endDate = document.getElementById("endDate").value.split("-");
        const year = startDate[0];
        const month = startDate[1] - 1;
        const date = startDate[2];
        const endYear =endDate[0];
        const endMonth =endDate[1];
        const dateEnd =endDate[2]
        if (title.length > 0 && startDate.length > 2) {
            return { title:title, amount, 'start': new Date(`${year}`, `${month}`, `${date}`)}
        } else {
            alert("All Field is Required!")
        }
    }
    $("#confirmBtn").click(function(e){
      e.preventDefault();
      const order =handleInput();
      const keyId = localStorage.length +1
      localStorage.setItem(keyId, JSON.stringify(order));
      alert('Success');
      $("#orderModal").modal("hide");
    })

  });
 