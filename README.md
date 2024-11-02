# reproducer-react-native-textinput-focus

![Build](https://github.com/QichenZhu/reproducer-react-native-textinput-focus/workflows/Pre%20Merge%20Checks/badge.svg)

This is your new React Native Reproducer project.

## Reproduction steps

1. Build and run the iOS app with New Arch enabled.

```Bash
cd ReproducerApp
yarn
bundle install
cd ios
RCT_NEW_ARCH_ENABLED=1 pod install
cd ..
yarn ios
```

2. Click the Focus button.

3. Click the Blur button.

4. Click the Focus button.

**Expected result:** The `TextInput` is focused initially and after clicking the Focus button.

**Actual result:** The `TextInput` is not focused initially and after the first time clicking the Focus button. It is only focused after clicking Blur and then clicking Focus again.

# Reproducer TODO list

- [x] 1. Create a new reproducer project.
- [x] 2. Git clone your repository locally.
- [x] 3. Edit the project to reproduce the failure you're seeing.
- [x] 4. Push your changes, so that Github Actions can run the CI.
- [x] 5. Make sure the repository is public and share the link with the issue you reported.
