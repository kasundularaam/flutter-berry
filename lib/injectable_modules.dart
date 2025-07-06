import 'package:blabla/presentation/router/app_router.dart';
import 'package:injectable/injectable.dart';

@module
abstract class InjectableModules {
  @singleton
  AppRouter get appRouter => AppRouter();
}
