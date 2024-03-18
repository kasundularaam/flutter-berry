import 'package:flutter/material.dart';

import 'space.dart';

class ErrorSnackbar extends SnackBar {
  ErrorSnackbar({
    super.key,
    String? message,
    Duration duration = const Duration(seconds: 2),
    SnackBarAction? action,
    Animation<double>? animation,
  }) : super(
            content: Row(
              children: [
                const Icon(
                  Icons.error_rounded,
                  color: Colors.red,
                ),
                const HGap(),
                Expanded(
                  child: Text(
                    message ?? "An Error Ocurred",
                    style: const TextStyle(
                      color: Colors.white,
                    ),
                  ),
                ),
              ],
            ),
            backgroundColor: Colors.black);
}

class SucceedSnackbar extends SnackBar {
  SucceedSnackbar({
    super.key,
    String? message,
    Duration duration = const Duration(seconds: 2),
    SnackBarAction? action,
    Animation<double>? animation,
  }) : super(
            content: Row(
              children: [
                Container(
                  decoration: const ShapeDecoration(
                      shape: CircleBorder(), color: Colors.green),
                  padding: const EdgeInsets.all(6),
                  child: const Icon(
                    Icons.done_rounded,
                    color: Colors.white,
                  ),
                ),
                const HGap(),
                Expanded(
                  child: Text(
                    message ?? "Succeeded",
                    style: const TextStyle(
                      color: Colors.white,
                    ),
                  ),
                ),
              ],
            ),
            backgroundColor: Colors.black);
}

showSuccessSnackbar({required BuildContext context, String? message}) {
  ScaffoldMessenger.of(context).showSnackBar(SucceedSnackbar(message: message));
}

showFailedSnackbar({required BuildContext context, String? message}) {
  ScaffoldMessenger.of(context).showSnackBar(ErrorSnackbar(message: message));
}
