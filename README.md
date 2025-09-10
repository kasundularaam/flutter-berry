# Flutterberry 🍓

[![npm version](https://img.shields.io/npm/v/flutterberry.svg)](https://www.npmjs.com/package/flutterberry)
[![npm downloads](https://img.shields.io/npm/dm/flutterberry.svg)](https://www.npmjs.com/package/flutterberry)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Flutter](https://img.shields.io/badge/Flutter-3.0+-blue.svg)](https://flutter.dev)
[![Node.js](https://img.shields.io/badge/Node.js-14+-green.svg)](https://nodejs.org)

**Skip the setup, start coding!** Flutterberry is a powerful CLI tool that instantly bootstraps your Flutter projects with a production-ready architecture, essential dependencies, and best practices - all with a single command.

## ✨ Why Flutterberry?

Starting a new Flutter project usually means hours of manual setup:
- ❌ Manually installing dozens of dependencies
- ❌ Setting up folder architecture from scratch  
- ❌ Configuring routing, state management, and dependency injection
- ❌ Creating boilerplate code for themes and utilities
- ❌ Running build_runner and resolving conflicts

**Flutterberry does ALL of this in seconds!** ⚡️

## 🚀 What's in the Box?

With a single `flutterberry` command, you get:

- **🏗️ Production-Ready Architecture** - Complete DDD (Domain-Driven Design) folder structure
- **📦 Essential Dependencies** - All the packages you need for modern Flutter development  
- **🎨 Theming Setup** - Beautiful, customizable themes with Flex Color Scheme
- **🧭 Routing Configuration** - Auto Route setup for declarative navigation
- **💉 Dependency Injection** - GetIt + Injectable for clean architecture
- **🔄 State Management** - Flutter BLoC pattern implementation
- **🛠️ Code Generation** - Automatic build_runner execution with conflict resolution

## 📦 Installation

Install Flutterberry globally via npm:

```bash
npm install -g flutterberry
```

## 🎯 Usage

1. **Create a new Flutter project:**
   ```bash
   flutter create my_awesome_app
   cd my_awesome_app
   ```

2. **Run Flutterberry:**
   ```bash
   flutterberry
   ```

3. **That's it!** Your project is now ready with professional architecture and all dependencies installed.

## 🏗️ Project Structure

Flutterberry creates a clean, scalable architecture following DDD principles:

```
lib/
├── app/                    # Application layer
├── core/                   # Shared core functionality
│   ├── extensions/         # Dart extensions
│   ├── domain/            # Domain layer
│   │   └── failure/       # Error handling
│   ├── infrastructure/    # Infrastructure layer  
│   │   ├── repo/          # Repository implementations
│   │   └── services/      # External services
│   └── presentation/      # Presentation layer
│       ├── router/        # Navigation setup
│       ├── screens/       # UI screens
│       │   └── landing/   # Landing page example
│       ├── widgets/       # Reusable widgets
│       └── app/          # App configuration
├── injection/             # Dependency injection setup
└── main.dart             # Application entry point
```

## 📚 Dependencies Included

### **Core Dependencies**
- **auto_route** - Declarative route generation
- **dartz** - Functional programming utilities  
- **flex_color_scheme** - Advanced Material Design theming
- **flutter_bloc** - Predictable state management
- **freezed_annotation** - Immutable data classes
- **get_it** - Service locator for dependency injection
- **injectable** - Code generation for dependency injection
- **json_annotation** - JSON serialization
- **google_fonts** - Beautiful typography
- **toastification** - Elegant toast notifications

### **Dev Dependencies**
- **auto_route_generator** - Route code generation
- **build_runner** - Code generation runner
- **freezed** - Data class and union generation  
- **injectable_generator** - DI code generation
- **json_serializable** - JSON serialization generation

## 🎨 Architecture Benefits

**Domain-Driven Design (DDD)** provides:
- **🔄 Separation of Concerns** - Clean boundaries between layers
- **🧪 Testability** - Easy unit testing with dependency injection
- **📈 Scalability** - Architecture that grows with your project
- **🔧 Maintainability** - Organized code that's easy to understand
- **🔄 Reusability** - Modular components across features

## 🛠️ What Happens Under the Hood

When you run `flutterberry`, it:

1. **📁 Copies Architecture** - Replaces your `lib/` folder with the complete structure
2. **⬇️ Installs Dependencies** - Adds all core packages to `pubspec.yaml`
3. **🔧 Installs Dev Dependencies** - Adds development tools
4. **🔄 Fetches Packages** - Runs `flutter pub get`
5. **⚡ Generates Code** - Executes `build_runner` with conflict resolution

## 🚦 Requirements

- **Node.js** 14.0 or higher
- **Flutter** 3.0 or higher
- **Dart** 2.17 or higher

## 🎯 Quick Start Example

```bash
# Create new project
flutter create todo_app
cd todo_app

# Bootstrap with Flutterberry  
flutterberry

# Start developing immediately!
flutter run
```

## 🤝 Contributing

We love contributions! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues & Support

Found a bug or need help? Please [open an issue](https://github.com/yourusername/flutterberry/issues) on GitHub.

## ⭐ Show Your Support

If Flutterberry saved you time, please give it a star! ⭐️

---

**Made with 💜 by developers, for developers**
