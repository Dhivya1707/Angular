import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  constructor(private http: HttpClient) { } 
                
  //get
get(): void { 
this.http.get('http://localhost:8081/api/standup').subscribe(data => { 
console.log(data);
});

} 
 //post//
post(): void{ 
this.http.post('http://localhost:3000/customer', { 
custumorid:"104",  
customerName:"akila",
custumorPhn:"75372", 
customerLoc:"sez", 
address:"uvw",
}) 
.subscribe( 
res => { 
console.log(res); 
}, 
err=> { 
console.log("Error occured in yur program"); 
}
);
} 
    //put//
put(): void{ 
this.http.put('http://localhost:3000/customer/104', 
{ custumorid:"104",  
customerName:"akilandeshwari",
custumorPhn:"75372", 
customerLoc:"sez", 
address:"uvw" 


} 
) 
.subscribe( 
res => { 
console.log(res); 
}
);
} 
    //delete
delete(): void { 
this.http.delete('http://localhost:3000/customer/104').subscribe(data => { 
console.log(data);
});
}

}

