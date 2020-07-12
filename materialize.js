key: "_handleCarouselClick",
      value: function _handleCarouselClick(e) {
        // Disable clicks if carousel was dragged.
        if (this.dragged) {
          e.preventDefault();

          return false;
        } else if (!this.options.fullWidth) {

          var diff = this._wrap(this.center) - clickedIndex;

          // Disable clicks if carousel was shifted by click
          if (diff !== 0) {
            e.preventDefault();

          }
          this._cycleTo(clickedIndex);
        }
      }