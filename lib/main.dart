import 'package:flutter/material.dart';
import 'package:money_links/injection.dart';
import 'package:money_links/presentation/app.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  configureDependencies();
  runApp(const App());
}
