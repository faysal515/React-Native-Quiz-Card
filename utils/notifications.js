import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'qflash:notifications';

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
}

function createNotification() {
  return {
    title: 'Quiz Reminder !',
    body: 'Don\'t forget to take a quiz today!',
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  };
}

export async function setLocalNotification() {
  const response = await AsyncStorage.getItem(NOTIFICATION_KEY);
  const notification = await JSON.parse(response);

  if (notification === null) {
    const permissionResponse = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    const { status } = permissionResponse;
    if (status === 'granted') {
      Notifications.cancelAllScheduledNotificationsAsync();
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(20);
      tomorrow.setMinutes(0);
      Notifications.scheduleLocalNotificationAsync(
        createNotification(),
        {
          time: tomorrow,
          repeat: 'day',
        },
      );
      AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
    }
  }
}
