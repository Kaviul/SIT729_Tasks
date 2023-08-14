#include <DHT.h>
#include <DHT_U.h>
#include <DHTStable.h>
#include <SoftwareSerial.h>
//#include <ESP8266WiFi.h>




//void setup() {
//   mySerial = new Serial( this, Serial.list()[0], 9600 );
//   output = createWriter( "data.txt" );
//}





#define Type DHT11
int sensePin = 2;

//SoftwareSerial ArduinoUno(4,3);
//SoftwareSerial NodeMCU(D3,D2);

DHT HT(sensePin, Type);
float humidity;
float tempC;
float tempF;
int delaay=500;
int delaay2=1000;
String message = "";



void setup() {
  // put your setup code here, to run once:
Serial.begin(9600);
//ArduinoUno.begin(4800);
//NodeMCU.begin(4800);
//
//pinMode(sensePin,INPUT);
//pinMode(D3,OUTPUT);


HT.begin();
delay(delaay);


}

void loop() {
  // put your main code here, to run repeatedly:
humidity = HT.readHumidity();
tempC = HT.readTemperature();
tempF = HT.readTemperature(true);


Serial.print("{ 'Humidity' : ");
Serial.print(humidity);
Serial.println(",");
Serial.print(" 'Temperature in C' : ");
Serial.print(tempC);
Serial.println(",");
Serial.print(" 'Temperature in F' : ");
Serial.println(tempF);
Serial.println("},");
delay(10000);
//
//void keyPressed() {
//    output.flush();  // Writes the remaining data to the file
//    output.close();  // Finishes the file
//    exit();  // Stops the program
//}

//message = message + "{\"humidity\": ";
//message = message + humidity;
//message = message + ", \"temperature in C\": ";
//message = message + tempC;
//message = message + ", \"temperature in F\": ";
//message = message + tempF;
//message = message + "}";
//
//Serial.println(message);
//delay(5000);

//while(ArduinoUno.available()>0){
//  float var = ArduinoUno.parseFloat();
//  if(ArduinoUno.read()== '\n'){
//    Serial.println(var);
//    } 
//  }
// delay(delaay);
//
// int i = 10;
// NodeMCU.print(i);
// NodeMCU.println("\n");
//  delay(delaay);
}
