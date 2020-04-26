const calculator = (()=> {
  let billamt, sharing, service;

  getBill = () => {
    billamt = parseInt(document.getElementById("bill").value);
  };

  getSharing = () =>{
    sharing = document.getElementById("bill-share").value;
  }

  getService = () => {
    service = parseInt(document.getElementById("service").value);
  }

  return{
    calculate: () => {
      getBill();
      getSharing();
      getService();
      if (billamt && sharing) {
        let tbill = billamt + (service/100 * billamt);
        let ttip = service/100 * billamt;
        let tshare = tbill/sharing;
        document.getElementById("tamt").innerHTML = `Total Amount = ${tbill}`;
        document.getElementById("ttip").innerHTML = `Total tip = ${ttip}`;
        document.getElementById("tshare").innerHTML = `Amt/person = ${tshare}`;
      }
      else {
        alert("Enter All Fields");
      }
    }
  }

})();



const controller = ((calc) =>{

  eventHandler = () => {
    document.getElementById("calculate").addEventListener("click",calc.calculate)
  }

  return {
    init: () => {
      console.log("App Started");
      eventHandler()
    }
  }

})(calculator);

controller.init();
