// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// InjectableConfigGenerator
// **************************************************************************

// ignore_for_file: type=lint
// coverage:ignore-file

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:blabla/injectable_modules.dart' as _i472;
import 'package:blabla/presentation/app.dart' as _i1056;
import 'package:blabla/presentation/router/app_router.dart' as _i6;
import 'package:get_it/get_it.dart' as _i174;
import 'package:injectable/injectable.dart' as _i526;

extension GetItInjectableX on _i174.GetIt {
  // initializes the registration of main-scope dependencies inside of GetIt
  _i174.GetIt init({
    String? environment,
    _i526.EnvironmentFilter? environmentFilter,
  }) {
    final gh = _i526.GetItHelper(this, environment, environmentFilter);
    final injectableModules = _$InjectableModules();
    gh.singleton<_i6.AppRouter>(() => injectableModules.appRouter);
    gh.factory<_i1056.App>(() => _i1056.App.create(gh<_i6.AppRouter>()));
    return this;
  }
}

class _$InjectableModules extends _i472.InjectableModules {}
