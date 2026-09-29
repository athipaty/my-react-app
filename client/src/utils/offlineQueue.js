const STORAGE_KEY = "sgo-location-stock-queue-v1";

function readQueue() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeQueue(queue) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(queue));
  } catch {
    // storage full or unavailable — queue just won't survive a reload
  }
}

export function getQueue() {
  return readQueue();
}

export function enqueue(action) {
  const queue = readQueue();
  queue.push({
    ...action,
    id: `q-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    createdAt: Date.now(),
  });
  writeQueue(queue);
  return queue;
}

export function setQueue(queue) {
  writeQueue(queue);
}

export function clearQueue() {
  writeQueue([]);
}
