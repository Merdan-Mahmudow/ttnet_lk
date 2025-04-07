from pytube import YouTube
import os

def download_youtube_video():
    try:
        # Запрашиваем у пользователя ссылку на видео
        url = input("Введите ссылку на видео YouTube: ")
        
        # Создаем объект YouTube
        yt = YouTube(url)
        
        # Получаем информацию о видео
        print(f"\nНазвание: {yt.title}")
        print(f"Количество просмотров: {yt.views}")
        print(f"Длительность: {yt.length} секунд")
        
        # Выбираем поток с наивысшим разрешением
        video = yt.streams.get_highest_resolution()
        
        # Создаем папку для загрузки, если её нет
        if not os.path.exists("downloads"):
            os.makedirs("downloads")
        
        # Скачиваем видео
        print("\nНачинаем загрузку...")
        video.download("downloads")
        print("\nВидео успешно загружено!")
        
    except Exception as e:
        print(f"Произошла ошибка: {str(e)}")

if __name__ == "__main__":
    download_youtube_video()
