import { Pipe, PipeTransform } from "@angular/core";
import { AsYouType } from "libphonenumber-js";

@Pipe({
  name: "phone",
})
export class PhonePipe implements PipeTransform {
  transform(phoneValue: string): string {
    if (!phoneValue) {
      return "";
    }
    try {
      return phoneValue.replace(/^(\d{3})(\d{3})(\d{5})$/g, '($1)-$2-$3');
    } catch (error) {
      console.log(error);
      return phoneValue;
    }
  }
}

