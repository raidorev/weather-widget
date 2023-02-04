import { vi } from 'vitest'

export const navigatorMock = {
  geolocation: {
    clearWatch: vi.fn(),
    getCurrentPosition: vi
      .fn()
      .mockImplementation(
        (
          successCallback: PositionCallback,
          errorCallback?: PositionErrorCallback | null,
          options?: PositionOptions,
        ) => {
          successCallback({
            coords: {
              accuracy: 0,
              altitude: 0,
              altitudeAccuracy: 0,
              heading: 0,
              latitude: 0,
              longitude: 0,
              speed: 0,
            },
            timestamp: 0,
          })
        },
      ),
    watchPosition: vi.fn(),
  },
} as unknown as Navigator
