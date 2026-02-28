import win32gui
import win32con


def listar_janelas():
    janelas = []

    def enum_handler(hwnd, _):
        if win32gui.IsWindowVisible(hwnd):
            titulo = win32gui.GetWindowText(hwnd)
            if titulo.strip():  # ignora janelas sem título
                janelas.append((hwnd, titulo))

    win32gui.EnumWindows(enum_handler, None)
    return janelas


def set_always_on_top(hwnd):
    win32gui.SetWindowPos(
        hwnd,
        win32con.HWND_TOPMOST,
        0, 0, 0, 0,
        win32con.SWP_NOMOVE | win32con.SWP_NOSIZE
    )


if __name__ == "__main__":

    janelas = listar_janelas()

    if not janelas:
        print("Nenhuma janela encontrada.")
        exit()

    print("\nJanelas abertas:\n")

    for i, (_, titulo) in enumerate(janelas):
        print(f"[{i}] {titulo}")

    print()

    try:
        escolha = int(input("Digite o número da janela que deseja fixar: "))
    except ValueError:
        print("Entrada inválida.")
        exit()

    if escolha < 0 or escolha >= len(janelas):
        print("Número fora da lista.")
        exit()

    hwnd, titulo = janelas[escolha]

    set_always_on_top(hwnd)

    print("\nJanela fixada no topo:")
    print(titulo)