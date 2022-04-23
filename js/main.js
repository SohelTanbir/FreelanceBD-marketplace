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
        const servicesArr = $(".servicer-item");
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
    function handleInput() {
        const title = document.getElementById("title").value.trim();
        const amount = document.getElementById("amount").value;
        const startDate = document.getElementById("startDate").value.split("-");
        const endDate = document.getElementById("endDate").value.split("-");
        const year = startDate[0];
        const month = startDate[1] - 1;
        const date = startDate[2];
        if (title.length > 0 && startDate.length > 2) {
            return { title, amount, year, month, startDate, endDate }
        } else {
            alert("All Field is Required!")
        }
    }
    $("#confirmBtn").click(function(e){
      e.preventDefault();
      const order =handleInput();
      localStorage.setItem(100, JSON.stringify(order));
      alert('Success');
      $("#orderModal").modal("hide");
    })

  });
 