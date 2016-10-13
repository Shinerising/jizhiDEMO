import { Pipe, PipeTransform } from '@angular/core';
declare var Date: any;

@Pipe({name: 'datebefore'})
export class DateBeforePipe implements PipeTransform {
  transform(value: string): any {
    if (!value) return value;
    var time_interval = (new Date() - new Date(value)) / 1000;
	var time_text = "";
	if(time_interval < 0) {
		time_text = "未来";
	} else if(time_interval < 86400) {
		time_text = "刚刚";
	} else if(time_interval < 2592000) {
		time_text = Math.floor(time_interval / 86400)+"天前";
	} else if(time_interval < 946080000) {
		time_text = Math.floor(time_interval / 2592000)+"月前";
	} else {
		time_text = Math.floor(time_interval / 94608000)+"年前";
	} 
    return time_text;
  }
}