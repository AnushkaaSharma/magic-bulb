from iconservice import *

TAG = 'Magic'

COLORS = ["RED","GREEN","BLUE","YELLOW","WHITE"]


class Magic(IconScoreBase):
    _COLOR = 'color'

    def __init__(self, db: IconScoreDatabase) -> None:
        super().__init__(db)
        self._color = VarDB(self._COLOR, db, value_type = str)

    def on_install(self) -> None:
        super().on_install()

    def on_update(self) -> None:
        super().on_update()


    @eventlog(indexed=1)
    def Color(self,_color:str) -> None:
        pass

    @external
    def set_color(self, _color: str) -> None:
        if _color not in COLORS:
            revert(f'Invalid color')
        self._color.set(_color)
        self.Color(_color)
    
    @external(readonly=True)
    def get_color(self) -> str:
        return self._color.get()
