import 'package:flutter/material.dart';
import 'text.dart';
import 'package:toastification/toastification.dart';

showSuccessToast(BuildContext context, String message) {
  toastification.show(
    context: context,
    title: const TextRegular(
      "Succeed",
      color: Colors.white,
      bold: true,
    ),
    description: TextRegular(
      message,
      color: Colors.white,
    ),
    alignment: Alignment.topCenter,
    style: ToastificationStyle.fillColored,
    icon: const Icon(
      Icons.check_circle,
      color: Colors.white,
    ),
    primaryColor: Colors.green,
    showProgressBar: false,
    autoCloseDuration: const Duration(seconds: 5),
  );
}

showFailedToast(BuildContext context, String message) {
  toastification.show(
    context: context,
    title: const TextRegular(
      "Error",
      color: Colors.white,
      bold: true,
    ),
    description: TextRegular(
      message,
      color: Colors.white,
    ),
    alignment: Alignment.topCenter,
    style: ToastificationStyle.fillColored,
    icon: const Icon(
      Icons.error,
      color: Colors.white,
    ),
    primaryColor: Colors.red,
    showProgressBar: false,
    autoCloseDuration: const Duration(seconds: 5),
  );
}
