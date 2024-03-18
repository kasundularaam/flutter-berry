import 'package:flex_color_scheme/flex_color_scheme.dart';
import 'package:flutter/material.dart';
import 'package:money_links/injection.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: "Money Links",
      debugShowCheckedModeBanner: false,
      theme: FlexThemeData.light(scheme: FlexScheme.wasabi),
      darkTheme: FlexThemeData.dark(scheme: FlexScheme.wasabi),
      themeMode: ThemeMode.system,
      routerConfig: AppRouter().config(),
    );
  }
}
