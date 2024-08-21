import 'package:dartz/dartz.dart';

import '../../domain/failure/failure.dart';

extension EitherX<L, R> on Either<L, R> {
  R getOrCrash() {
    return fold((l) => throw const Failure("Invalid value"), (r) => r);
  }

  L getLeft() {
    return fold((l) => l, (r) => throw const Failure("Invalid value"));
  }
}

extension OptionX<T> on Option<T> {
  T getOrCrash() {
    return fold(() => throw const Failure("Invalid value"), (r) => r);
  }
}
