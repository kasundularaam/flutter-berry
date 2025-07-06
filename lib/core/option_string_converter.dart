import 'package:json_annotation/json_annotation.dart';
import 'package:dartz/dartz.dart';

class OptionStringConverter implements JsonConverter<Option<String>, String?> {
  const OptionStringConverter();

  @override
  Option<String> fromJson(String? json) {
    return json == null ? none() : some(json);
  }

  @override
  String? toJson(Option<String> object) {
    return object.fold(() => null, (str) => str);
  }
}
