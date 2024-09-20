import 'dart:io';

import 'package:flutter/material.dart';

String uri = 'http://172.17.63.110:3000';

void showSnackBar(BuildContext context, String text) {
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(
      content: Text(text),
    ),
  );
}
