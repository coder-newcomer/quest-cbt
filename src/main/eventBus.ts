type EventCallback = (data: unknown) => void

interface EventBus {
  events: Record<string, EventCallback[]>
  subscribe(event: string, callback: EventCallback): void
  publish(event: string, data: unknown): void
}

const eventBus: EventBus = {
  events: {},
  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(callback)
  },
  publish(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => callback(data))
    }
  }
}

export default eventBus
