﻿goreMbifa.directive('goreMbifaBootstrap', function () {
    return {
        template:
           `<style>
                #gorembifa-app {
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    padding: 14px 18px;
                    margin: 0px 0px 12px 0px;
                }

                #gorembifa-app select {
                    width: 100%;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    padding: 3px;
                }

                #gorembifa-app form {
                    width: 100%;
                    display: block;
                    margin-bottom: 0px;
                }

                #gorembifa-app input[type="submit"] {
                    width: 100%;
                    height: 24px;
                    border: 1px solid #ddd;
                    border-radius: 3px;
                    background: linear-gradient(to bottom, #f7f8fa, #e7e9ec);
                    margin: 10px 0px 0px 0px;
                    font-family: Arial, sans-serif;
                }
            </style>
            <div id="gorembifa-app">
                <form method="{{ method }}" target="{{ target }}" action="{{ action }}" acceptCharset="{{ acceptCharset }}">
                    <select name="{{ primaryType.name }}" data-ng-model="primaryType.selectedType" data-ng-options="type.value for type in primaryType.types track by type.key"/>
                    <input type="hidden" name="name" value="{{ title }}"/>
                    <input type="hidden" name="artist_credit.names.0.name" value="{{ artist }}"/>
                    <input type="hidden" name="status" value="{{ status }}"/>
                    <input type="hidden" name="events.0.date.day" value="{{ releaseDate[0] }}"/>
                    <input type="hidden" name="events.0.date.month" value="{{ releaseDate[1] }}"/>
                    <input type="hidden" name="events.0.date.year" value="{{ releaseDate[2] }}"/>
                    <input type="hidden" name="labels.0.name" value="{{ label }}"/>
                    <input type="hidden" name="urls.0.link_type" value="{{ externalLinkType }}"/>
                    <input type="hidden" name="urls.0.url" value="{{ asin }}"/>
                    <discs data-ng-repeat="disc in tracklist.discs track by $index">
                        <input type="hidden" name="mediums.{{ $index }}.format" value="CD"/>
                        <tracks data-ng-repeat="track in disc.tracks" track by $index>
                            <input type="hidden" name="mediums.{{ $parent.$index }}.track.{{ $index }}.number" value="{{ track.number }}"/>
                            <input type="hidden" name="mediums.{{ $parent.$index }}.track.{{ $index }}.name" value="{{ track.title }}"/>
                            <input type="hidden" name="mediums.{{ $parent.$index }}.track.{{ $index }}.length" value="{{ track.length }}"/>
                        </tracks>
                    </discs>
                    <input type="hidden" name="edit_note" value="{{ editNote }}"/>
                    <input type="submit" value="Export to MusicBrainz"/>
                </form>
            </div>`
    };
});