import 'package:dartz/dartz.dart';

extension EitherX<L, R> on Either<L, R> {
  R getOrCrash() {
    return fold((l) => throw const Failure(message: "Invalid value"), (r) => r);
  }

  L getLeft() {
    return fold((l) => l, (r) => throw const Failure(message: "Invalid value"));
  }
}
