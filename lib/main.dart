import 'package:flutter/material.dart';

import 'presentation/app.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  configureDependencies();
  runApp(const App());
}
