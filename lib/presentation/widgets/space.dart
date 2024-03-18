import 'package:flutter/material.dart';

class VGap extends StatelessWidget {
  final double gap;

  const VGap({super.key, this.gap = 8});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: gap,
    );
  }
}

class HGap extends StatelessWidget {
  final double gap;

  const HGap({super.key, this.gap = 8});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: gap,
    );
  }
}
