const { RichText } = wp.blockEditor;

export default function Save(props) {
  const { attributes } = props;
  const { label } = attributes;

  return (
    <button
      style="border-color:white;--button-height:var(--button-height-lg);--button-padding-x:var(--button-padding-x-lg);--button-fz:var(--mantine-font-size-lg);--button-radius:calc(6.25rem * var(--mantine-scale));--button-bg:transparent;--button-hover:var(--mantine-color-primaryColor-outline-hover);--button-color:var(--mantine-color-primaryColor-outline);--button-bd:calc(0.0625rem * var(--mantine-scale)) solid var(--mantine-color-primaryColor-outline);color:var(--mantine-color-white);text-transform:uppercase"
      class="mantine-focus-auto mantine-active Button-module__Ri6GEa__root m_77c9d27d mantine-Button-root m_87cf2631 mantine-UnstyledButton-root"
      data-variant="outline"
      data-size="lg"
      type="button"
    >
      <span class="m_80f1301b mantine-Button-inner">
        <span
          style="font-weight:400;font-size:15px;letter-spacing:.8px"
          class="m_811560b9 mantine-Button-label"
        >
            {label}
        </span>
      </span>
    </button>
  );
}
