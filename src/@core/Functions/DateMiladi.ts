export const dateConvertor = (item) => {
    let miladiRaw = `${item}`
    let miladi = miladiRaw.slice(0, 10);
    let year = miladi.slice(0, 4);
    let month = miladi.slice(5,7);
    if(month == 1){
      month = "ژانویه"
    }
    else if(month == 2){
      month = "فوریه"
    }
    else if(month == 3){
      month = "مارس"
    }
    else if(month == 4){
      month = "آوریل"
    }
    else if(month == 5){
      month = "می"
    }
    else if(month == 6){
      month = "ژوئن"
    }
    else if(month == 7){
      month = "جولای"
    }
    else if(month == 8){
      month = "آگوست"
    }
    else if(month == 9){
      month = "سپتامبر"
    }
    else if(month == 10){
      month = "اکتبر"
    }
    else if(month == 11){
      month = "نوامبر"
    }
    else if(month == 12){
      month = "دسامبر"
    };
    let day = miladi.slice(8,10);
    let dateMiladii = `${day} ${month} ${year}`;
    return dateMiladii;
  }