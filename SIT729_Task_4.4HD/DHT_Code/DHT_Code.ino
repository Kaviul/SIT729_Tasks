#include <DHT.h>
#include <RTClib.h>
#include <DHT_U.h>
#include <Wire.h>
#include <DHTStable.h>
#include <SoftwareSerial.h>


RTC_DS1307 rtc;

char buf[20];


#define Type DHT11
int sensePin = 2;

DHT HT(sensePin, Type);
float humidity;
float tempC;
float tempF;
int delaay=500;
int delaay2=1000;
String message = "";



void setup() {
  
Serial.begin(9600);
Wire.begin();
rtc.begin();
rtc.adjust(DateTime(F(__DATE__),F(__TIME__)));



HT.begin();
delay(delaay);


}

void loop() {
 
humidity = HT.readHumidity();
tempC = HT.readTemperature();
tempF = HT.readTemperature(true);

DateTime now = rtc.now();

sprintf(buf, " %03d:%02d:%02d %02d/%02d/%02d ", now.minute(), now.hour(), now.second(), now.month(), now.day(), now.year());

Serial.print(F("{ 'Time' : "));
Serial.println(buf);

Serial.print(" 'Humidity' : ");
Serial.print(humidity);
Serial.println(",");
Serial.print(" 'Temperature in C' : ");
Serial.print(tempC);
Serial.println(",");
Serial.print(" 'Temperature in F' : ");
Serial.println(tempF);
Serial.println("},");
delay(10000);

}
