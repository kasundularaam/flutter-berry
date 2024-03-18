import 'package:freezed_annotation/freezed_annotation.dart';
part 'failure.freezed.dart';

@freezed
abstract class Failure with _$Failure {
  const factory Failure({required String message}) = _Failure;
  factory Failure.unknown() {
    return const Failure(message: "Unknown Error Occurred");
  }
}
