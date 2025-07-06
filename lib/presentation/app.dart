import 'package:flex_color_scheme/flex_color_scheme.dart';
import 'package:flutter/material.dart';
import 'package:injectable/injectable.dart';

import 'router/app_router.dart';

@injectable
class App extends StatelessWidget {
  final AppRouter _router;
  const App._(this._router);

  @factoryMethod
  static App create(AppRouter router) {
    return App._(router);
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: "App Title",
      debugShowCheckedModeBanner: false,
      theme: FlexThemeData.light(scheme: FlexScheme.wasabi),
      darkTheme: FlexThemeData.dark(scheme: FlexScheme.wasabi),
      themeMode: ThemeMode.system,
      routerConfig: _router.config(),
    );
  }
}
