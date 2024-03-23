import 'package:fludert/assets/weather_map.dart';
import 'package:fludert/pages/flash_screen.dart';
import 'package:flutter/material.dart';
import 'pages/login_page.dart';

void main (){
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp ({super.key});

  @override
  Widget build (BuildContext context) {
    return MaterialApp (
      debugShowCheckedModeBanner: false,
      home: FlashScreen(),
    );
  }
}