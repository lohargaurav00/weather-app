"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "@/redux/store/store";
import { setCoordinates } from "@/redux/slices/coordinatesSlice";
import { DEFAULT_SUGGESTIONS as suggestions } from "@/lib/config";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "./ui/button";

const SearchDialog = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useState("");

  const handleSelect = (suggestion: any) => {
    return () => {
      console.log(suggestion);
      setOpen(false);
      setValue("");
      dispatch(
        setCoordinates({
          lat: suggestion.coordinates.lat,
          lon: suggestion.coordinates.lng,
        })
      );
    };
  };

  return (
    <>
      <Button
        variant={"outline"}
        size={"lg"}
        onClick={() => setOpen(true)}
        className="h-9 w-full whitespace-nowrap px-4"
      >
        <p className="text-sm text-muted-foreground">
          Search city...{" "}
          <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 hover:bg-primary md:ml-28">
            <span className="text-xs">⌘</span>J
          </kbd>
        </p>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search city..."
          value={value}
          onValueChange={setValue}
          // disabled={!ready}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <>
              {suggestions.map((suggestion, i) => (
                <CommandItem key={i} onSelect={handleSelect(suggestion)}>
                  {suggestion.description}
                </CommandItem>
              ))}
            </>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchDialog;
