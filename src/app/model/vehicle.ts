import { Driver } from "./driver";

export class Vehicle {
    public vehicleId:number=0;
    public vehicleNumber:string="";
    public driver:Driver=new Driver();
    public type:string="";
    public category:string="";
    public description:string="";
    public location:string="";
    public capacity:number=0;
    public chargesPerKM:number=0.0;
    public fixedCharges:number=0.0; 
}
